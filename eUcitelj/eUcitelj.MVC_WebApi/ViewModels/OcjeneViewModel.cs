using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eUcitelj.MVC_WebApi.ViewModels
{
    public class OcjeneViewModel
    {
        public Guid OcjeneId { get; set; }
        public Guid PredmetiId { get; set; }
        public int Ocjena { get; set; }
        //public virtual PredmetiViewModel Predmeti { get; set; }
    }
}