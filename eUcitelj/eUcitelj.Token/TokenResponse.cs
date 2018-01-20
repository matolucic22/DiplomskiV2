using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.Token
{
    public class TokenResponse
    {
        public Guid KorisnikId { get; set; }//KorisnikId
        public string Korisnicko_ime { get; set; }//Korisnicko_ime
        public Token Token { get; set; }
        public string Role { get; set; }
    }
}
