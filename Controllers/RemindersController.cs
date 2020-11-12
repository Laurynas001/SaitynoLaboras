using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Data;
using SaitynoLaboras.DTOs.Reminder;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SaitynoLaboras.Controllers;
using Microsoft.AspNetCore.Authorization;
using SaitynoLaboras.Authentication_Authorization;

namespace SaitynoLaboras.Controllers
{
    [Route("Users")]
    [ApiController]
    public class RemindersController : ControllerBase
    {
        private readonly IReminderRepository _repository;
        private readonly IMapper _mapper;

        public RemindersController(IReminderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [Authorize]
        [HttpGet("/[controller]")]
        public ActionResult<IEnumerable<ReminderReadDTO>> GetAllReminders()
        {
            int id = -1;
            var reminders = _repository.GetAllReminders(id).ToList();
            if (reminders.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<IEnumerable<ReminderReadDTO>>(reminders));
            }
        }

        [Authorize]
        [HttpGet("{Uid}/[controller]")]
        public ActionResult<IEnumerable<ReminderReadDTO>> GetAllReminders(int Uid)
        {

            var reminders = _repository.GetAllReminders(Uid).ToList();
            if (reminders.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<IEnumerable<ReminderReadDTO>>(reminders));
            }
        }

        [Authorize]
        [HttpGet("{Uid}/[controller]/{Rid}", Name="GetReminderById")]
        public ActionResult<ReminderReadDTO> GetReminderById(int Uid, int Rid)
        {
            var reminder = _repository.GetReminderById(Uid, Rid);
            if (reminder == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<ReminderReadDTO>(reminder));
            }
        }

        [Authorize]
        [HttpPost("{Uid}/[controller]")]
        public ActionResult<ReminderCreateDTO> PostReminder(int Uid, ReminderCreateDTO reminder)
        {

            var reminderModel = _mapper.Map<Reminder>(reminder);
            try
            {
                _repository.PostReminder(Uid, reminderModel);
            }
            catch (Exception)
            {

                return NotFound();
            }
            var reminderReadDTO = _mapper.Map<ReminderReadDTO>(reminderModel);
            return CreatedAtRoute(nameof(GetReminderById), new { Uid, Rid = reminderReadDTO.Id }, reminderReadDTO);
        }

        [Authorize]
        [HttpPost("{Uid}/[controller]/{Rid}")]
        public ActionResult PostReminder(int Uid, int Rid, ReminderCreateDTO reminder)
        {
            return BadRequest();
        }

        [Authorize]
        [HttpPut("{Uid}/[controller]/{Rid}")]
        public ActionResult PutReminder(int Uid, int Rid, ReminderUpdateDTO reminder)
        {
            var foundReminder = _repository.GetReminderById(Uid, Rid);
            if (foundReminder == null)
            {
                return NotFound();
            }
            else if (reminder.WantedPrice == 0 || reminder.GasStationName == null || reminder.GasType == null)
            {
                return BadRequest();
            }
            else
            {
                var reminderMapped = _mapper.Map<Reminder>(reminder);
                try
                {
                    _repository.PutReminder(Uid, Rid, reminderMapped);
                }
                catch (Exception)
                {

                    return NotFound();
                }
                return NoContent();
            }
        }


        [Authorize]
        [HttpPut("{Uid}/[controller]")]
        public ActionResult PutReminder(int Uid, ReminderUpdateDTO reminder)
        {
            return BadRequest();
        }

        [Authorize]
        [HttpPatch("{Uid}/[controller]/{Rid}")]
        public ActionResult PatchReminder(int Uid, int Rid, ReminderPartialUpdateDTO reminder)
        {
            var foundReminder = _repository.GetReminderById(Uid, Rid);
            if (foundReminder == null)
            {
                return NotFound();
            }
            else if (reminder.WantedPrice == 0 && reminder.GasStationName == null && reminder.GasType == null)
            {
                return BadRequest();
            }
            else
            {
                var reminderMapped = _mapper.Map<Reminder>(reminder);
                try
                {
                    _repository.PatchReminder(Uid, Rid, reminderMapped);
                }
                catch (Exception)
                {

                    return NotFound();
                }
                return NoContent();
            }
        }

        [Authorize]
        [HttpPatch("{Uid}/[controller]")]
        public ActionResult PatchReminder(int Uid, ReminderPartialUpdateDTO reminder)
        {
            return BadRequest();
        }

        [Authorize]
        [HttpDelete("{Uid}/[controller]/{Rid}")]
        public ActionResult<ReminderReadDTO> DeleteReminder(int Uid, int Rid)
        {
            var reminder = _repository.GetReminderById(Uid, Rid);
            if (reminder == null)
            {
                return NotFound();
            }
            else
            {
                try
                {
                    _repository.DeleteReminder(Uid, Rid);
                }
                catch (Exception)
                {

                    return NotFound();
                }
                return Ok(_mapper.Map<ReminderReadDTO>(reminder));
            }
        }

        [Authorize]
        [HttpDelete("{Uid}/[controller]")]
        public ActionResult<ReminderReadDTO> DeleteReminder(int Uid)
        {
            return BadRequest();
        }

    }
}
