using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eUcitelj.MVC_WebApi.ViewModels
{
    public class KorisnikViewModel
    {
        public Guid KorisnikId { get; set; }

        public string Ime_korisnika { get; set; }

        public string Prezime_korisnika { get; set; }

        public string Korisnicko_ime { get; set; }

        public string Password { get; set; }

        public string Potvrda { get; set; }

        public string Role { get; set; }

        public virtual ICollection<KorisnikViewModel> Predmeti { get; set; }//1 korisnit moze biti upisan na vise predmeta
    }
}