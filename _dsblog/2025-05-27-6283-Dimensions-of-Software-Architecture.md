
# Dimenions of Software Architecture

Call these "Architectural Concern Categories" or "Dimensions of Software Architecture" or "Axes of Architectural Design" it is your choice. Here I am referring them as Dimenions of Software Architecture. They are extremely important for any software solution creator or software product maker. In this article we are trying to understand these dimensions. I am aware there is some overlapping between these terms.

## **Execution Models**
How your code runs: in sequence, in parallel, or in reaction to events. 

- **Synchronous**: Step-by-step, blocking (`print(read_file())`)  
- **Asynchronous**: Non-blocking (`await fetch()`) 
- **Concurrent**: Tasks progress together (`threading`, `asyncio`) 
- **Parallel**: Truly simultaneous (`multiprocessing`) 
- **Event-driven**: React to events (`onclick`, Node.js)
- **Reactive** : A model where the system reacts to inputs (data/events) as they come in.
- **Event-driven** : System behavior is determined by events or messages.
- **Blocking / Non-blocking** : Whether a thread waits (blocks) or not when performing an operation (like I/O). 
- **Multi-threaded** : Uses multiple threads of execution. 
- **Single-threaded** : Only one thread handles all operations (e.g., Node.js with event loop). 
- **Actor model** : Independent actors communicate via message passing (e.g., Erlang, Akka).
- **Coroutine-based** : Lightweight cooperative threads (e.g., Python asyncio, Go routines).

## **Communication Patterns**
How components talk to each other.  
- **Request-Response**: Client-server (`HTTP REST`) 
- **Pub-Sub**: Send and forget (`Kafka`, `MQTT`) 
- **Message Queue**: Tasks queued (`RabbitMQ`) 
- **Streaming**: Continuous flow (`WebSocket`, `gRPC stream`)   
- **RESTful APIs** : HTTP-based stateless communication.
- **gRPC** : High-performance RPC using Protocol Buffers.
- **WebSockets** : Bi-directional communication over a single TCP connection.
- **Polling / Long Polling** : Repeated or extended HTTP requests to simulate real-time communication.
- **Shared Memory** : Threads/processes access common memory space (risky but fast).
- **Remote Procedure Call (RPC)** : Directly invoke methods across networks.
- **Signal / Slot** : Observer-based pattern used in GUIs or reactive systems.

## **Architectural Styles**
High-level design structure of a system.
- **Monolithic**: All-in-one (`Django app`) 
- **Layered**: Separate tiers (`MVC`, `3-tier`) 
- **Microservices**: Small independent services (`Netflix`) 
- **Event-driven architecture**: Events trigger behavior (`e-commerce order placed`) 
- **Service-Oriented Architecture (SOA)** : Services communicate over a network, often with an enterprise service bus (ESB).
- **Serverless** : Logic is deployed as short-lived functions (e.g., AWS Lambda).
- **Client-Server** : Traditional model with a requesting client and responding server.
- **Peer-to-Peer (P2P)** : Every node is both a client and server.
- **Hexagonal (Ports & Adapters)** : Decouples core logic from external systems via interfaces.
- **Clean Architecture** : Emphasizes separation of concerns and independence of frameworks/UI.
- **Onion Architecture** : Similar to Clean Architecture, with concentric layers.
- **Microkernel / Plugin** : Core system extended via plugins (e.g., IDEs).
- **Pipeline / Filter** : Data passes through a sequence of processing steps.
- **Blackboard Architecture** : Components contribute to and draw from a shared data structure.
- **CQRS (Command Query Responsibility Segregation)** : Separate read and write models.
- **Event Sourcing** : Store changes as a sequence of events.
- **Saga Pattern** : Handle long-running distributed transactions.
- **Circuit Breaker** : Prevent failure propagation in microservices.
- **Strangler Fig Pattern** : Gradually replace a legacy system.
- **Bulkhead Pattern** : Isolate failures in one part of a system.
- **Sidecar Pattern** : Attach helper services to main service (common in service mesh).


## **Deployment & Runtime Models**
How and where the system runs.  
- **Containers**: Lightweight runtime (`Docker`) 
- **Serverless**: No server management (`AWS Lambda`) 
- **Orchestrated/Cloud-native**: Designed for cloud (`Kubernetes`) 
- **Edge Computing** : Computation close to the data source (IoT, CDN).


   
## **Scalability & Availability**
How the system handles load and stays online.   
- **Load balancing**: Distribute requests (`Nginx`) 
- **Replication**: Data copies (`MongoDB replica set`) 
- **Sharding**: Split data (`Cassandra`) 
- **Auto-scaling**: Elastic capacity (`AWS EC2 Auto Scaling`) 
- **Horizontal Scaling** : Add more machines.
- **Vertical Scaling** : Add more resources to existing machine.
- **High Availability** : System remains available despite failures.


   
## **Data Handling & Consistency**
How data is stored and kept accurate.   
- **ACID**: Reliable DB transactions (`PostgreSQL`) 
- **BASE**: Eventually consistent (`Cassandra`) 
- **CQRS**: Read/write separation 
- **Event Sourcing**: Store change events (`Kafka log`)

## **Resilience & Fault Tolerance**
How the system recovers from failure.   
- **Retry**: Try again on failure 
- **Circuit Breaker**: Stop failing requests (`Netflix Hystrix`) 
- **Fallback**: Backup response logic  
- **Failover** : Automatic switching to backup systems.

## **Security Boundaries**
How the system protects itself and data.
- **Authentication**: Identity check (`OAuth`) 
- **Authorization**: Access control (`JWT`, RBAC) 
- **TLS/SSL**: Encryption in transit 

## **Modularity & Extensibility**
How easily the system can evolve.   
- **Plugin system**: Add-on features 
- **Inversion of Control (IoC)**: Framework calls your code (`Spring`) 
- **Dependency Injection**: Inject components 

## **Observability & Monitoring**
How the system is monitored and debugged.   
- **Logging**: App logs (`loguru`, `winston`) 
- **Metrics**: Numbers to track (`Prometheus`) 
- **Tracing**: Flow tracking (`OpenTelemetry`)   

## **Dev & Release Lifecycle**
How the system is built, tested, and released.  
- **CI/CD**: Automated build/deploy (`GitHub Actions`) 
- **Blue-Green Deployment**: Zero downtime switch 
- **Canary Release**: Small rollout  

## **Orthogonal Concepts**
- **Scalability** : Ability to grow with load.
- **Resilience** : Ability to recover from failure.
- **Observability** : System visibility through logging, tracing, and metrics.
- **Maintainability** : Ease of making changes over time.
- **Security-by-Design** : Security considered from the outset.
- **Idempotency** : Repeated operations produce the same result.
- **Stateless vs Stateful** : Whether or not a component retains memory of previous interactions.

