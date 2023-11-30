terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {
  # Connect to the Docker daemon using the default Unix socket
}

resource "docker_network" "app_network" {
  name = "nestjs-mongo-network"
}

resource "docker_container" "mongo" {
  image  = "mongo:latest"
  name   = "mongo-container"
  networks = [docker_network.app_network.name]
  ports {
    internal = 27017
  }
}

resource "docker_container" "nestjs_app" {
  image  = "asmasmida13/dockertp:plandoimgbackend"
  name   = "nestjs-container"
  networks = [docker_network.app_network.name]
  ports {
    internal = 3000
  }
  depends_on = [docker_container.mongo]
}

# Additional Resources and Configurations...
