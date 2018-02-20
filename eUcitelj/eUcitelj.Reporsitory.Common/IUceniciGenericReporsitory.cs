﻿using eUcitelj.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.Reporsitory.Common
{
   public interface IUceniciGenericReporsitory
    {
        Task<IEnumerable<IUceniciDomainModel>> GetAllAsync();//vraća IEnumerable polje podataka
        Task<IUceniciDomainModel> GetAsync(Guid Id);
        Task<int> AddAsync(IUceniciDomainModel addObj);
        Task<int> UpdateAsync(IUceniciDomainModel updated);//obavi i returna samo save
        Task<int> DeleteAsync(Guid Id);
    }
}
