# main.tf

provider "azurerm" {
  features = {}
}

resource "azurerm_resource_group" "example" {
  name     = "example-resource-group"
  location = "East US"
}

resource "azurerm_container_group" "nestjs_mongo_aci" {
  name                = "nestjs-mongo-aci"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  os_type             = "Linux"

  container {
    name   = "nestjs-container"
    image  = "asmasmida13/dockertp:plandoimgbackend"
    cpu    = "0.5"
    memory = "1.5Gi"
    ports {
      internal = 3000
      external = 3000
    }
  }

  container {
    name   = "mongo-container"
    image  = "mongo:latest"
    cpu    = "0.5"
    memory = "1Gi"
    ports {
      internal = 27017
      external = 27017
    }
  }

  tags = {
    environment = "production"
  }
}
