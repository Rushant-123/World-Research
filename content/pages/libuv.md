---
title: "libuv Async I/O Library"
company: "Node.js Contributors"
country: "Global"
selling_price: 0.0
inputs:
  - name: "C Programming"
    cost: 0.0
    link: "c-programming"
  - name: "Operating System"
    cost: 0.0
    link: "operating-system"
  - name: "Open Source"
    cost: 0.0
    link: "open-source"
value_created: 0.0
---

## Event Loop Architecture

1. Initialize the event loop structure with uv_loop_init() allocating memory for loop metadata
2. Create the event loop's internal heap for timer management using binary min-heap data structure
3. Set up the loop's handle queue to track all active handles (TCP, UDP, timers, etc.)
4. Initialize the loop's request queue for one-time operations like connect, write, shutdown
5. Allocate the pending queue for callbacks that need to be invoked in the next iteration
6. Create the idle handle queue for tasks to run when loop has no other work
7. Set up the prepare handle queue for callbacks before polling for I/O
8. Initialize the check handle queue for callbacks after polling for I/O
9. Create the closing handle queue for cleanup callbacks when handles are closed
10. Allocate the async handle queue for thread-safe cross-thread communication

## Platform I/O Polling Setup

11. On Linux, initialize epoll file descriptor with epoll_create1() for scalable I/O multiplexing
12. On macOS, initialize kqueue file descriptor with kqueue() for event notification
13. On Windows, create I/O completion port (IOCP) with CreateIoCompletionPort for async I/O
14. On FreeBSD, set up kqueue similar to macOS for consistent BSD behavior
15. On Solaris, initialize event port with port_create() for Solaris-specific I/O
16. Configure the polling backend with appropriate timeout and edge-triggered behavior
17. Allocate watchers array to map file descriptors to their callback functions
18. Set up the signal handling pipe for async-signal-safe signal delivery
19. Initialize the loop's stop flag and alive counter for lifecycle management
20. Create the backend file descriptor for the chosen polling mechanism

## Event Loop Execution

21. Enter uv_run() with specified run mode (DEFAULT, ONCE, or NOWAIT)
22. Update the loop's timestamp with current time from system monotonic clock
23. Check if loop is alive by examining active handles and pending requests
24. Execute all pending callbacks from previous iteration's I/O operations
25. Run all idle handle callbacks if any are registered and active
26. Execute prepare handle callbacks before polling for I/O events
27. Calculate timeout for polling based on timer heap and run mode
28. If timers are present, set timeout to time until next timer expiration
29. If run mode is NOWAIT, set polling timeout to zero for non-blocking poll
30. If no active handles or requests, set timeout to zero to exit quickly

## I/O Polling Phase

31. Call platform-specific polling function (epoll_wait, kevent, GetQueuedCompletionStatus)
32. Block waiting for I/O events or until timeout expires
33. Wake up when I/O events occur, timeout expires, or async handle is triggered
34. Process all returned I/O events from the polling mechanism
35. For each ready file descriptor, retrieve associated watcher structure
36. Invoke the watcher's callback function with event flags (readable, writable, error)
37. Handle edge-triggered events by ensuring all available data is consumed
38. Process IOCP completion packets on Windows, extracting overlapped structures
39. Update handle states based on I/O completion results
40. Queue additional pending callbacks for deferred execution

## Timer Management

41. After polling, check the timer heap for expired timers
42. Extract the minimum timer from the binary heap structure
43. Compare timer's expiration time with current loop timestamp
44. If timer expired, invoke its callback function with timer handle
45. If timer is repeating, calculate next expiration time and re-insert into heap
46. If timer is one-shot, mark it as inactive and stop it
47. Continue extracting timers until heap is empty or next timer hasn't expired
48. Maintain heap property after removals using heapify operations
49. Update loop's next timeout based on new minimum timer
50. Handle timer callback execution time affecting subsequent timer precision

## Check and Closing Phases

51. Execute all check handle callbacks after I/O polling completes
52. Process async handle callbacks that were triggered from other threads
53. Iterate through closing handle queue for handles marked for closure
54. Invoke close callbacks for each handle being cleaned up
55. Free memory associated with closed handles
56. Remove closed handles from the active handle count
57. Update loop's alive status based on remaining active handles
58. If run mode is ONCE, exit after single iteration completes
59. If run mode is DEFAULT and loop is alive, continue to next iteration
60. Return from uv_run() when loop is no longer alive or stop requested

## Thread Pool Initialization

61. Create the global thread pool during first work queue request
62. Default to 4 worker threads, configurable via UV_THREADPOOL_SIZE environment variable
63. Allocate array of uv_thread_t structures for worker thread handles
64. Initialize the work queue mutex for thread-safe access to pending work
65. Create condition variable for signaling worker threads about new work
66. Initialize the slow I/O queue for long-running operations
67. Set up the run-once queue for immediate execution tasks
68. Allocate work request structures with callback pointers and user data
69. Spawn each worker thread with uv_thread_create() calling worker function
70. Each worker enters infinite loop waiting on condition variable

## Thread Pool Work Execution

71. Submit work request with uv_queue_work() providing work and done callbacks
72. Acquire work queue mutex to safely add request to queue
73. Append work request to the tail of the pending queue
74. Signal one worker thread via condition variable to wake up
75. Release work queue mutex after queue modification
76. Worker thread wakes up and acquires work queue mutex
77. Dequeue work request from the head of the pending queue
78. Release mutex before executing work callback to allow parallel execution
79. Invoke the work callback function in the worker thread context
80. Re-acquire mutex after work completion to queue the done callback

## Thread Pool Completion

81. Add completed work request to the loop's pending queue
82. Use uv_async_send() to wake up the event loop from I/O polling
83. Signal the loop's async handle via platform-specific mechanism
84. On Linux, write to the eventfd to trigger epoll wakeup
85. On macOS, write to the signal pipe to trigger kqueue wakeup
86. On Windows, post to IOCP to trigger GetQueuedCompletionStatus wakeup
87. Event loop wakes up and processes async handle queue
88. Retrieve completed work requests from the pending queue
89. Invoke the after-work callback in the event loop thread
90. Pass work results and status code to the completion callback

## File System Operations Setup

91. Implement uv_fs_open() to open files with specified flags and mode
92. Create fs request structure with operation type and file path
93. For sync mode, directly call platform open() syscall in current thread
94. For async mode, queue work to thread pool with fs_work callback
95. Store file descriptor in request structure upon successful open
96. Implement uv_fs_close() to close open file descriptors
97. Validate file descriptor before submitting close operation
98. Queue close work to thread pool to avoid blocking event loop
99. Implement uv_fs_read() for reading data from file descriptors
100. Allocate buffer structures (uv_buf_t) for receiving read data

## File System Read/Write Operations

101. In fs_work callback, call preadv() or ReadFile() based on platform
102. Handle partial reads by adjusting buffer pointers and lengths
103. Store number of bytes read in the request result field
104. Implement uv_fs_write() for writing buffers to file descriptors
105. Support scatter-gather I/O with multiple buffers using writev()
106. Handle partial writes by tracking bytes written across calls
107. Implement uv_fs_unlink() to delete files from filesystem
108. Queue unlink work with file path to thread pool
109. Call unlink() or DeleteFile() in worker thread
110. Implement uv_fs_mkdir() to create directories with specified permissions

## Advanced File System Operations

111. Implement uv_fs_rmdir() to remove empty directories
112. Implement uv_fs_readdir() to list directory contents
113. Use opendir(), readdir(), closedir() on Unix platforms
114. Use FindFirstFile(), FindNextFile() on Windows platforms
115. Allocate array of dirent structures for directory entries
116. Implement uv_fs_stat() to retrieve file metadata
117. Call stat() or GetFileAttributesEx() based on platform
118. Fill uv_stat_t structure with size, timestamps, permissions
119. Implement uv_fs_rename() for atomic file renaming
120. Implement uv_fs_fsync() to flush file data to disk

## File System Watching

121. Implement uv_fs_event_init() to create filesystem event watcher
122. On Linux, use inotify_init() to create inotify file descriptor
123. Register inotify descriptor with event loop for readable events
124. On macOS, use FSEvents API for directory tree monitoring
125. Create FSEventStream with path and callback function
126. Schedule FSEventStream on a separate thread for events
127. On Windows, use ReadDirectoryChangesW for directory change notifications
128. Set up OVERLAPPED structure for asynchronous notification
129. Implement uv_fs_event_start() to begin watching path
130. Add watch descriptor with inotify_add_watch() on Linux

## File System Event Processing

131. When inotify descriptor becomes readable, read inotify events
132. Parse inotify_event structures from read buffer
133. Extract filename and event mask (CREATE, DELETE, MODIFY, RENAME)
134. Invoke user callback with event type and filename
135. On macOS, receive FSEvents callback with changed paths
136. Filter events and invoke user callback for relevant changes
137. On Windows, process ReadDirectoryChangesW completion
138. Parse FILE_NOTIFY_INFORMATION structures for changes
139. Re-issue ReadDirectoryChangesW to continue monitoring
140. Implement uv_fs_event_stop() to stop watching and cleanup resources

## TCP Socket Initialization

141. Implement uv_tcp_init() to create TCP handle structure
142. Allocate socket file descriptor with socket() syscall
143. Set socket to non-blocking mode with fcntl() or ioctlsocket()
144. Configure socket options like TCP_NODELAY for low latency
145. Set SO_REUSEADDR to allow address reuse after close
146. Register socket file descriptor with event loop's I/O watcher
147. Implement uv_tcp_bind() to bind socket to address and port
148. Call bind() syscall with sockaddr structure
149. Handle both IPv4 and IPv6 address families
150. Implement uv_tcp_listen() to mark socket for accepting connections

## TCP Server Operations

151. Call listen() syscall with backlog queue size
152. Register socket for readable events to detect incoming connections
153. When socket becomes readable, accept() is ready to be called
154. Implement uv_tcp_accept() to accept new client connections
155. Call accept() syscall to create new connected socket
156. Set new socket to non-blocking mode
157. Create new TCP handle for client socket
158. Invoke connection callback with server and client handles
159. Handle EAGAIN/EWOULDBLOCK when no connections are pending
160. Continue accepting in loop until all pending connections are processed

## TCP Client Operations

161. Implement uv_tcp_connect() to initiate client connection
162. Create connect request structure with callback
163. Call connect() syscall with server address
164. On EINPROGRESS, register socket for writable events
165. When socket becomes writable, connection is complete or failed
166. Check connection status with getsockopt(SO_ERROR)
167. If successful, invoke connect callback with status 0
168. If failed, invoke callback with error code
169. Implement uv_read_start() to begin receiving data on socket
170. Register socket for readable events in event loop

## TCP Read/Write Operations

171. When socket becomes readable, allocate buffer via alloc callback
172. Call recv() or read() syscall to read available data
173. Invoke read callback with buffer and bytes read
174. Handle EOF by invoking callback with UV_EOF status
175. Handle errors by invoking callback with error code
176. Implement uv_write() to send data on socket
177. Create write request structure with buffers and callback
178. Attempt immediate write with send() or write() syscall
179. If write would block, queue remaining data for later
180. Register socket for writable events if data remains

## TCP Write Completion

181. When socket becomes writable, continue writing queued data
182. Track write progress across multiple send() calls
183. When all data is sent, invoke write callback with status 0
184. Deregister writable events if no more pending writes
185. Implement uv_shutdown() to perform graceful shutdown
186. Call shutdown() syscall to close write half of connection
187. Register for readable events to detect peer shutdown
188. Invoke shutdown callback when complete
189. Implement uv_close() to close TCP handle completely
190. Deregister all I/O watchers from event loop

## UDP Socket Operations

191. Implement uv_udp_init() to create UDP handle structure
192. Create UDP socket with socket(SOCK_DGRAM)
193. Set socket to non-blocking mode
194. Implement uv_udp_bind() to bind to local address
195. Support binding to multicast groups for group communication
