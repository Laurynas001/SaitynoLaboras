using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Data;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Controllers
{
    [Route("Users")]
    [ApiController]
    public class RemindersController : ControllerBase
    {
        private readonly IReminderRepository _repository;
        public RemindersController(IReminderRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("/[controller]")]
        public ActionResult<IEnumerable<Reminder>> GetAllReminders()
        {
            int id = -1;
            var reminders = _repository.GetAllReminders(id).ToList();
            if (reminders.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(reminders);
            }
        }

        [HttpGet("{Uid}/[controller]")]
        public ActionResult<IEnumerable<Reminder>> GetAllReminders(int Uid)
        {
            var reminders = _repository.GetAllReminders(Uid).ToList();
            if (reminders.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(reminders);
            }
        }

        [HttpGet("{Uid}/[controller]/{Rid}")]
        public ActionResult<Reminder> GetReminderById(int Uid, int Rid)
        {
            var reminder = _repository.GetReminderById(Uid, Rid);
            if (reminder == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(reminder);
            }
        }

        [HttpPost("{Uid}/[controller]")]
        public ActionResult<Reminder> PostReminder(int Uid, Reminder reminder)
        {
            int id = _repository.PostReminder(Uid, reminder);
            if (id != 409)
            {
                return CreatedAtRoute(new Uri("https://saitynolaboras20201008165604.azurewebsites.net/Users/" + Uid + "/Reminders" + id), reminder);
            }
            else
            {
                return Conflict();
            }
        }

        [HttpPost("{Uid}/[controller]/{Rid}")]
        public ActionResult<Reminder> PostReminder(int Uid, int Rid, Reminder reminder)
        {
            return NotFound();
        }

        [HttpPut("{Uid}/[controller]/{Rid}")]
        public ActionResult<Price> PutPrice(int Uid, int Rid, Reminder reminder)
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
                _repository.PutReminder(Uid, Rid, reminder);
                reminder.Id = Rid;
                return Ok(reminder);
            }
        }


        [HttpPut("{Uid}/[controller]")]
        public ActionResult<Price> PutPrice(int Uid, Reminder reminder)
        {
            return BadRequest();
        }

        [HttpPatch("{Uid}/[controller]/{Rid}")]
        public ActionResult<Price> PatchPrice(int Uid, int Rid, Reminder reminder)
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
                _repository.PatchReminder(Uid, Rid, reminder);
                return Ok(foundReminder);
            }
        }

        [HttpPatch("{Uid}/[controller]")]
        public ActionResult<Price> PatchPrice(int Uid, Reminder reminder)
        {
            return BadRequest();
        }


        [HttpDelete("{Uid}/[controller]/{Rid}")]
        public ActionResult<Price> DeleteReminder(int Uid, int Rid)
        {
            var reminder = _repository.GetReminderById(Uid, Rid);
            if (reminder == null)
            {
                return NotFound();
            }
            else
            {
                _repository.DeleteReminder(Uid, Rid);
                return Ok(reminder);
            }
        }

        [HttpDelete("{Uid}/[controller]")]
        public ActionResult<Price> DeleteReminder(int Uid)
        {
            return BadRequest();
        }

    }
}
