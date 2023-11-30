# outputs.tf
output "nestjs_app_url" {
  value = azurerm_container_group.nestjs_mongo_aci.fqdn
}

output "mongo_db_url" {
  value = "${azurerm_container_group.nestjs_mongo_aci.ip_address}:${azurerm_container_group.nestjs_mongo_aci.container.1.ports[0].external}"
}
