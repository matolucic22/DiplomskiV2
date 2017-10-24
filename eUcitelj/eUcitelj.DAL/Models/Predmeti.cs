using eUcitelj.DAL.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.DAL.Models
{
    public class Predmeti:IPredmeti
    {
        public Guid PredmetiId { get; set; }

        public Guid KorisnikId { get; set; }

        public string Ime_predmeta { get; set; }


        public virtual ICollection<IOcjene> Ocjene { get; set; }//1 predmet moze imati vise ocijena

        public virtual ICollection<IKviz> Kviz { get; set; }//1 predmet moze imati vise kvizova
        public virtual IKorisnik Korisnik { get; set; }//poziva jednog korisnika di je npr id=1; - 1 predmet ima vise korisnika. Zato što svaki model ima 1 make m
    }
}
