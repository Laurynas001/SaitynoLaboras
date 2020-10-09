using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SaitynoLaboras.Models;

namespace SaitynoLaboras.Data
{
    public interface IReminderRepository
    {
        IEnumerable<Reminder> GetAllReminders(int Uid);
        Reminder GetReminderById(int Uid, int Rid);
        int PostReminder(int Uid, Reminder reminder);
        void PatchReminder(int Uid, int Rid, Reminder reminder);
        void PutReminder(int Uid, int Rid, Reminder reminder);
        void DeleteReminder(int Uid, int Rid);
    }
}
