using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Data;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Controllers
{
    [Route("GasStations")]
    [ApiController]
    public class PricesController : ControllerBase
    {
        private readonly IPriceRepository _repository;
        public PricesController(IPriceRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("{GSid}/Prices")]
        public ActionResult<Price> PostPrice(int GSid, Price price)
        {
            int id = _repository.PostPrice(GSid, price);
            if (id != 409)
            {
                return CreatedAtRoute(new Uri("https://saitynolaboras20201008165604.azurewebsites.net/GasStations/" + GSid + "/Prices"), price);
            }
            else
            {
                return Conflict();
            }
        }

        [HttpPost("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> PostPrice(int GSid, int Pid, Price price)
        {
            return NotFound();
        }

        [HttpGet("{GSid}/Prices")]
        public ActionResult<IEnumerable<Price>> GetAllPrices(int GSid)
        {
            var prices = _repository.GetAllPrices(GSid).ToList();
            if (prices.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(prices);
            }
        }

        [HttpGet("/Prices")]
        public ActionResult<IEnumerable<Price>> GetAllPrices()
        {
            int id = -1;
            var prices = _repository.GetAllPrices(id).ToList();
            if (prices.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(prices);
            }
        }

        [HttpGet("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> GetPriceById(int GSid, int Pid)
        {
            var price = _repository.GetPriceById(GSid, Pid);
            if (price == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(price);
            }
        }

        [HttpPatch("{GSid}/Prices")]
        public ActionResult<Price> PatchPrice()
        {
            return BadRequest();
        }

        [HttpPatch("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> PatchPrice(int GSid, int Pid, Price price)
        {
            var foundPrice = _repository.GetPriceById(GSid, Pid);
            if (foundPrice == null)
            {
                return NotFound();
            }
            else if (price.A95Price == 0 && price.A98Price == 0 && price.DPrice == 0 && price.DzPrice == 0 && price.GasPrice == 0 && price.Date == null)
            {
                return BadRequest();
            }
            else
            {
                _repository.PatchPrice(GSid, Pid, price);
                return Ok(foundPrice);
            }
        }

        [HttpPut("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> PutPrice(int GSid, int Pid, Price price)
        {
            var foundPrice = _repository.GetPriceById(GSid, Pid);
            if (foundPrice ==  null)
            {
                return NotFound();
            }
            else if (price.A95Price == 0 || price.A98Price == 0 || price.DPrice == 0 || price.DzPrice == 0 || price.GasPrice == 0 || price.Date == null)
            {
                return BadRequest();
            }
            else
            {
                _repository.PutPrice(GSid, Pid, price);
                price.Id = Pid;
                return Ok(price);
            }
        }


        [HttpPut("{GSid}/Prices")]
        public ActionResult<Price> PutPrice(int GSid, Price price)
        {
            return BadRequest();
        }

        [HttpDelete("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> DeletePrice(int GSid, int Pid)
        {
            var price = _repository.GetPriceById(GSid, Pid);
            if (price == null)
            {
                return NotFound();
            }
            else
            {
                _repository.DeletePrice(GSid, Pid);
                return Ok(price);
            }
        }

        [HttpDelete("{GSid}/Prices")]
        public ActionResult<Price> DeletePrice(int GSid)
        {
            return BadRequest();
        }
    }
}
