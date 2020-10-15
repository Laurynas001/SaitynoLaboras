using AutoMapper;
using SaitynoLaboras.DTOs.GasStation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using SaitynoLaboras.Models;

namespace SaitynoLaboras.Profiles
{
    public class GasStationsProfile : Profile
    {
        public GasStationsProfile()
        {
            //source -> target
            CreateMap<GasStation, GasStationReadDTO>();

            CreateMap<GasStationCreateDTO, GasStation>();

            CreateMap<GasStation, GasStationUpdateDTO>();
            CreateMap<GasStationUpdateDTO, GasStation>();

            CreateMap<GasStation, GasStationPartialUpdateDTO>();
            CreateMap<GasStationPartialUpdateDTO, GasStation>();
        }
    }
}
