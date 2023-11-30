terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {}

resource "docker_network" "app_network" {
  name = "nestjs-mongo-network"
}

resource "docker_container" "mongo" {
  image  = "mongo:latest"
  name   = "mongo-container"
  ports {
    internal = 27017
  }
  networks_advanced {
    name = docker_network.app_network.name
  }
}

resource "docker_container" "nestjs_app" {
  image     = "asmasmida13/dockertp:plandoimgbackend"
  name      = "nestjs-container"
  depends_on = [docker_container.mongo]
  ports {
    internal = 3000
  }
  networks_advanced {
    name = docker_network.app_network.name
  }
}

