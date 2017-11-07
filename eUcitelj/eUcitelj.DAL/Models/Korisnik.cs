using eUcitelj.DAL.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.DAL.Models
{
    public class Korisnik:IKorisnik
    {
        //public Korisnik()
        //{
        //   // public virtual ICollection<Predmeti> Predmeti { get; set; }//1 korisnit moze biti upisan na vise predmeta
        //    //this.Predmeti = new HashSet<Predmeti>();
        //}


        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public Guid KorisnikId { get; set; }

        public string Ime_korisnika { get; set; }

        public string Prezime_korisnika { get; set; }

        public string Korisnicko_ime { get; set; }

        public string Password { get; set; }

        public string Potvrda { get; set; }

        public string Role { get; set; }

        public virtual ICollection<Predmeti> Predmeti { get; set; }//1 korisnit moze biti upisan na vise predmeta
    }
}
