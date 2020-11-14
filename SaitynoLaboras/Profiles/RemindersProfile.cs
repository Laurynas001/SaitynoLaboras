using AutoMapper;
using SaitynoLaboras.DTOs.Reminder;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Profiles
{
    public class RemindersProfile : Profile
    {
        public RemindersProfile()
        {
            CreateMap<Reminder, ReminderReadDTO>();

            CreateMap<ReminderCreateDTO, Reminder>();

            CreateMap<Reminder, ReminderUpdateDTO>();
            CreateMap<ReminderUpdateDTO, Reminder>();

            CreateMap<Reminder, ReminderPartialUpdateDTO>();
            CreateMap<ReminderPartialUpdateDTO, Reminder>();
        }
    }
}
