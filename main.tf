terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {
   host = "unix:///var/run/docker.sock"
   tls {
    ca_file   = "/etc/docker/certs/ca.pem"
    cert_file = "/etc/docker/certs/cert.pem"
    key_file  = "/etc/docker/certs/key.pem"
    verify    = true
  }
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
