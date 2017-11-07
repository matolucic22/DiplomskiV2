﻿using eUcitelj.DAL.Common;
using eUcitelj.DAL.Models;
using eUcitelj.Model.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.Model
{
    public class OcjeneDomanModel:IOcjeneDomainModel
    {
        public Guid OcjeneId { get; set; }       
        public Guid PredmetiId { get; set; }
        public int Ocjena { get; set; }

        //[ForeignKey("PredmetiId")]
        //public virtual IPredmeti Predmeti { get; set; }
    }
}
