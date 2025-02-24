graph TD
    A["Windows 11 (Host OS)"] -->|"Provides Kernel & Resources"| B["WSL 2 (Linux Kernel)"]
    B -->|"Runs Linux Environment"| C["Docker Desktop"]
    C -->|"Manages Containers"| D["Docker Containers"]
    B -->|"Provides Development Environment"| E["Visual Studio Code"]
    E -->|"Remote Development"| B
    E -->|"Manages Containers"| C
    B -->|"Stores Project Files"| F["~/projects/ (WSL File System)"]
    E -->|"Accesses Code"| F
    B -->|"Manages Git Repositories"| G["GitHub Repository"]
    G -->|"Version Control"| F

    %% Adding Colors
    style A fill:#ffcc00,stroke:#333,stroke-width:2px
    style B fill:#ff6666,stroke:#333,stroke-width:2px
    style C fill:#3399ff,stroke:#333,stroke-width:2px
    style D fill:#33cc33,stroke:#333,stroke-width:2px
    style E fill:#cc66ff,stroke:#333,stroke-width:2px
    style F fill:#ff9966,stroke:#333,stroke-width:2px
    style G fill:#66ccff,stroke:#333,stroke-width:2px