using Microsoft.VisualBasic;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public class ReminderSqlRepository : IReminderRepository
    {
        private readonly Context _context;
        public ReminderSqlRepository(Context context)
        {
            _context = context;
        }
        public void DeleteReminder(int Uid, int Rid)
        {
                var reminder = _context.Reminders.FirstOrDefault(a => a.Id == Rid && a.UserId == Uid);
                _context.Reminders.Remove(reminder);
                _context.SaveChanges();
        }

        public IEnumerable<Reminder> GetAllReminders(int Uid)
        {
            var reminders = _context.Reminders.Where(a => a.UserId == Uid);
            return reminders;
        }

        public Reminder GetReminderById(int Uid, int Rid)
        {
            var reminder = _context.Reminders.FirstOrDefault(a => a.UserId == Uid && a.Id == Rid);
            return reminder;
        }

        public void PostReminder(int Uid, Reminder reminder)
        {
            reminder.CreationDate = DateTime.Now;
            reminder.ValidUntil = DateTime.Now.AddDays(30);
            var user = _context.Users.FirstOrDefault(a => a.Id == Uid);
            reminder.User = user;
            user.Reminders.Add(reminder);
            _context.SaveChanges();
        }

        public void PutReminder(int Uid, int Rid, Reminder reminder)
        {
            var foundReminder = _context.Users.FirstOrDefault(a => a.Id == Uid).Reminders.FirstOrDefault(a => a.Id == Rid);
            foundReminder.ValidUntil = DateTime.Now.AddDays(30);
            foundReminder.WantedPrice = reminder.WantedPrice;
            foundReminder.GasStationName = reminder.GasStationName;
            _context.SaveChanges();
        }
    }
}
