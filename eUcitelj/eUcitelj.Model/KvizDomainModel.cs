using eUcitelj.DAL.Common;
using eUcitelj.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.Model
{
    public class KvizDomainModel:IKvizDomainModel
    {
        public Guid KvizId { get; set; }
        public Guid PredmetiId { get; set; }
        public String Pitanje { get; set; }
        public String Odg1 { get; set; }
        public String Odg2 { get; set; }
        public String Odg3 { get; set; }
        public String Tocan_odgovor { get; set; }
        public int Bodovi { get; set; }
        //public virtual IPredmeti Predmeti { get; set; }
    }
}
