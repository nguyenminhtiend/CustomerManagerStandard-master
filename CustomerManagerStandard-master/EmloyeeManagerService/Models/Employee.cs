﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmloyeeManagerService.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime Birthday { get; set; }
        public string Department { get; set; }
    }
}