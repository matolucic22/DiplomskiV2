using eUcitelj.DAL.Common;
using eUcitelj.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.Model
{
    public class PredmetiDomainModel:IPredmetiDomainModel
    {
        public string Ime_predmeta { get; set; }

        public Guid KorisnikId { get; set; }

        public Guid PredmetiId { get; set; }

        public virtual ICollection<IOcjeneDomainModel> Ocjene { get; set; }//1 predmet moze imati vise ocijena

        public virtual ICollection<IKvizDomainModel> Kviz { get; set; }//1 predmet moze imati vise ocijena
        public virtual IKorisnik Korisnik { get; set; }//poziva jednog korisnika di je npr id=1; - 1 predmet ima vise korisnika. Zato što svaki model ima 1 make m
      }
}

    

