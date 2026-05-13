output "primary_vpc_id" {
  description = "ID of the Primary VPC"
  value       = aws_vpc.primary_vpc.id
}

output "secondary_vpc_id" {
  description = "ID of the Secondary VPC"
  value       = aws_vpc.secondary_vpc.id
}

output "primary_vpc_cidr" {
  description = "CIDR block of the Primary VPC"
  value       = aws_vpc.primary_vpc.cidr_block
}

output "secondary_vpc_cidr" {
  description = "CIDR block of the Secondary VPC"
  value       = aws_vpc.secondary_vpc.cidr_block
}