using AutoMapper;
using eUcitelj.DAL.Models;
using eUcitelj.Model.Common;
using eUcitelj.Reporsitory.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.Reporsitory
{
    public class PredmetiGenericReporsitory : IPredmetiGenericReporsitory
    {
        protected IReporsitory Reporsitory{ get; set;}
        PredmetiGenericReporsitory(IReporsitory reporsitory)
        {
            this.Reporsitory = reporsitory;
        }

        public async Task<int> AddAsync(IPredmetiDomainModel addObj)
        {
            return await Reporsitory.AddAsync(Mapper.Map<Korisnik>(addObj));
        }

        public async Task<int> DeleteAsync(Guid Id)
        {
            return await Reporsitory.DeleteAsync<Korisnik>(Id);
        }

        public async Task<IEnumerable<IPredmetiDomainModel>> GetAllAsync()
        {
            return Mapper.Map<IEnumerable<IPredmetiDomainModel>>(await Reporsitory.GetAllAsync<Predmeti>());
        }

        public async Task<IPredmetiDomainModel> GetAsync(Guid Id)
        {
            return Mapper.Map<IPredmetiDomainModel>(await Reporsitory.GetAsync<Predmeti>(Id));
        }

        public async Task<int> UpdateAsync(IPredmetiDomainModel updated)
        {
            return await Reporsitory.UpdateAsync<Predmeti>(Mapper.Map<Predmeti>(updated));
        }
    }
}
