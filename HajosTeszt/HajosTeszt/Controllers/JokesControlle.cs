using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JokesControlle : Controller
    {
        // GET: api/<JokeController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<JokeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<JokeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<JokeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<JokeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
