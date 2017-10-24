using eUcitelj.DAL.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.DAL.Models
{
    public class Ocjene:IOcjene
    {
        public int Ocjena { get; set; }

        public Guid OcjeneId { get; set; }

        public Guid PredmetiId { get; set; }
        public IPredmeti Predmeti { get; set; }
    }
}
