using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public interface IPriceRepository
    {
        IEnumerable<Price> GetAllPrices(int GSid);
        Price GetPriceById(int GSid, int Pid);
        void PostPrice(int GSid, Price Price);
        void PutPrice(int GSid, int Pid, Price price);
        void DeletePrice(int GSid, int Pid);
        void PatchPrice(int GSid, int Pid, Price price);
    }
}
