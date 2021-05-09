using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    public class TesztController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
