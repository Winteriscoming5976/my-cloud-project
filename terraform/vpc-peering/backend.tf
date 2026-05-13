terraform {
  backend "s3" {
    bucket = "my-terraform-state-bucket-thanawat5976"
    key    = "dev/terraform.tfstate"
    region = "ap-southeast-1"
  }
}