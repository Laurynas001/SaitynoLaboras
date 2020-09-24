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
            if (reminder != null)
            {
                _repository.PostReminder(Uid, reminder);
                return CreatedAtRoute(new Uri("http://http://localhost:5000/Users/" + Uid + "/Reminders"), reminder);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut("{Uid}/[controller]/{Rid}")]
        public ActionResult<Price> PutPrice(int Uid, int Rid, Reminder reminder)
        {
            var foundReminder = _repository.GetReminderById(Uid, Rid);
            if (foundReminder == null)
            {
                return NoContent();
            }
            else
            {
                _repository.PutReminder(Uid, Rid, reminder);
                return Ok();
            }
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

    }
}
