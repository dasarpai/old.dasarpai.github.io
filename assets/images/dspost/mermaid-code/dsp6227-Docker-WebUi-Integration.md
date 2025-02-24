graph TB;
  A["Windows 11 (Host OS)"] -->|"Provides Kernel & Resource"s| B["WSL 2 (Linux Kernel)"];
  B -->|"Runs Linux Environment"| C[Docker Desktop];
  C -->|"Manages Containers"| D[Docker Containers];
  D -->|"Runs AI Model"| E["Ollama"];
  D -->|"Runs Web UI"| F["Open WebUI"];
  F -->|"Sends Requests to"| E;
  E -->|"Processes AI Queries"| F;
  B --> H["~/.ollama/ollama/models"];
  H -->D

  
  %% Adding Colors
  style A fill:#ffcc00,stroke:#333,stroke-width:2px;
  style B fill:#ff6666,stroke:#333,stroke-width:2px;
  style C fill:#3399ff,stroke:#333,stroke-width:2px;
  style D fill:#33cc33,stroke:#333,stroke-width:2px;
  style E fill:#66ccff,stroke:#333,stroke-width:2px;
  style F fill:#cc66ff,stroke:#333,stroke-width:2px;
  style H fill:#66cc99,stroke:#333,stroke-width:2px;
