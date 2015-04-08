using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using EmloyeeManagerService.Models;

namespace EmloyeeManagerService.Controllers
{
    public class EmployeeController : ApiController
    {
        private static List<Employee> listEmployees;
        public EmployeeController()
        {
            if (listEmployees == null)
            {
                listEmployees = new List<Employee>();
                for (int i = 0; i < 50; i++)
                {
                    listEmployees.Add(new Employee
                    {
                        Id = i,
                        FirstName = "First Name " + i.ToString(),
                        LastName = "Last Name " + i.ToString(),
                        Email = "abc@gmail.com",
                        Phone = "0123456789"
                    });
                }    
            }
        }
        public IEnumerable<Employee> GetAllEmployees()
        {
            return listEmployees;
        }
    }
}
