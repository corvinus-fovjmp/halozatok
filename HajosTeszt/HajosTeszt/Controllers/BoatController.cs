﻿using HajosTeszt.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    [ApiController]
    public class BoatController : Controller
    {









        [HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M2(int sorszám)
        {
            HajostesztContext context = new HajostesztContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();

            if (kérdés == null) return BadRequest("nincs ilyen sorszámú kérdés");


            return new JsonResult(kérdés);

        }

        [HttpGet]
        [Route ("questions/count")]
        public int M4()
        {
            HajostesztContext context = new HajostesztContext();

            int kérdésekSzáma = context.Questions.Count();
            return kérdésekSzáma;
        }
        
    }
}
