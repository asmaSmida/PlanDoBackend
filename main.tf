terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {
  host = "tcp://localhost:2375"
}

resource "docker_container" "mongo" {
  image = "mongo:latest"
  name  = "mongo-container"
  ports {
    internal = 27017
    external = 27017
  }
}
