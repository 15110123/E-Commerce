using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace VIVUTravelAgency.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            //Demo sending model object to view
            var lstMember = new []{ "Tân, Thống, Vi, Thông, Thiện, Phương"};
            return View(lstMember);
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
