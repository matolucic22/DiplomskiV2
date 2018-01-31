using eUcitelj.DAL.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.DAL.Common
{
    public interface IPredmeti
    {
        Guid PredmetiId { get; set; }
        Guid KorisnikId { get; set; }//Koji korisnik je upisao taj predmet
        String Ime_predmeta { get; set; }

        //ICollection<IOcjene> Ocjene { get; set; }//1 predmet moze imati vise ocijena

        //ICollection<IKviz> Kviz { get; set; }//1 predmet moze imati vise ocijena
        //IKorisnik Korisnik { get; set; }//poziva jednog korisnika di je npr id=1; - 1 predmet ima vise korisnika. Zato što svaki model ima 1 make m
    }
}
