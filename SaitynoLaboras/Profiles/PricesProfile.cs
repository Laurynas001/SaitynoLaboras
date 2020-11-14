using SaitynoLaboras.DTOs.Price;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace SaitynoLaboras.Profiles
{
    public class PricesProfile : Profile
    {
        public PricesProfile()
        {
            //source -> target
            CreateMap<Price, PriceReadDTO>();

            CreateMap<PriceCreateDTO, Price>();

            CreateMap<Price, PriceUpdateDTO>();
            CreateMap<PriceUpdateDTO, Price>();

            CreateMap<Price, PricePartialUpdateDTO>();
            CreateMap<PricePartialUpdateDTO, Price>();
        }
    }
}
