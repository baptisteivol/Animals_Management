# Animals_Management
Node.js webapp for Animals Management

## Install Guide w/ Ansible

### Ansible Configuration
* In your **hosts** file write :

  ---
  [app]
  inv1 ansible_ssh_host=*PUBLIC_IP_OR_DNS*

* In **group_vars** file write :

  ---
  \---
  ansible_ssh_user: ubuntu

*If you don't know where the files are check on **/etc/ansible/ansible.cfg***
