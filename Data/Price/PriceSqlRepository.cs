using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public class PriceSqlRepository : IPriceRepository
    {
        private readonly Context _context;
        public PriceSqlRepository(Context context)
        {
            _context = context;
        }

        public void DeletePrice(int GSid, int Pid)
        {
            var price = _context.Prices.FirstOrDefault(a => a.Id == Pid && a.GasStationId == GSid);
            _context.Prices.Remove(price);
            _context.SaveChanges();
        }

        public IEnumerable<Price> GetAllPrices(int GSid)
        {
            if (GSid != -1)
            {
                var prices = _context.Prices.Where(a => a.GasStationId == GSid);
                return prices;
            }
            else
            {
                var prices = _context.Prices.ToList();
                return prices;
            }
        }

        public Price GetPriceById(int GSid, int Pid)
        {
            var price = _context.Prices.FirstOrDefault(a => a.Id == Pid && a.GasStationId == GSid);
            return price;
        }

        public void PatchPrice(int GSid, int Pid, Price price)
        {
            var priceGet = _context.Prices.FirstOrDefault(a => a.Id == Pid);
            if (price.A95Price != 0)
            {
                priceGet.A95Price = price.A95Price;
            }
            if (price.A98Price != 0)
            {
                priceGet.A98Price = price.A98Price;
            }
            if (price.DPrice != 0)
            {
                priceGet.DPrice = price.DPrice;
            }
            if (price.DzPrice != 0)
            {
                priceGet.DzPrice = price.DzPrice;
            }
            if (price.GasPrice != 0)
            {
                priceGet.GasPrice = price.GasPrice;
            }
            if (price.Date != null)
            {
                priceGet.Date = price.Date;
            }
            _context.SaveChanges();
        }

        public void PostPrice(int GSid, Price price)
        {
            price.Date = DateTime.Now;
            price.GasStationId = GSid;
            var gasStation = _context.GasStations.FirstOrDefault(a => a.Id == GSid);
            price.GasStation = gasStation;
            _context.Prices.Add(price);
            _context.SaveChanges();
        }

        public void PutPrice(int GSid, int Pid, Price price)
        {
            var foundPrice = _context.GasStations.FirstOrDefault(a => a.Id == GSid).Prices.FirstOrDefault(a => a.Id == Pid);
            foundPrice.A95Price = price.A95Price;
            foundPrice.A98Price = price.A98Price;
            foundPrice.Date = DateTime.Now;
            foundPrice.DPrice = price.DPrice;
            foundPrice.DzPrice = price.DzPrice;
            foundPrice.GasPrice = price.GasPrice;
            _context.SaveChanges();
        }
    }
}
