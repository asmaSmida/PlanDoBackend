terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = ">= 2.0.0"
    }
  }
}

provider "docker" {
  host = "tcp://localhost:2375"
}


resource "docker_network" "app_network" {
  name = "nestjs-mongo-network"
}


resource "docker_container" "mongo" {
  image  = "mongo:latest"
  name   = "mongo-container"
  ports {
    internal = 27017
  }
}

resource "docker_container" "nestjs_app" {
  image     = "asmasmida13/dockertp:plandoimgbackend"
  name      = "nestjs-container"
  depends_on = [docker_container.mongo]
  ports {
    internal = 3000
  }
}



# Additional Resources and Configurations...
