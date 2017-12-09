using AutoMapper;
using eUcitelj.DAL.Common;
using eUcitelj.DAL.Models;
using eUcitelj.Model;
using eUcitelj.Model.Common;
using eUcitelj.Reporsitory.Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUcitelj.Reporsitory
{
    public class KorisnikGenericReporsitory : IKorisnikGenericReporsitory
    {
        protected IReporsitory Reporsitory { get; set; }
        public KorisnikGenericReporsitory(IReporsitory reporsitory)
        {
            this.Reporsitory = reporsitory;
        }
        public async Task<int> AddAsync(IKorisnikDomainModel addObj)
        {
            
            return await Reporsitory.AddAsync(Mapper.Map<Korisnik>(addObj));
        }

        public async Task<int> DeleteAsync(Guid Id)
        {
            return await Reporsitory.DeleteAsync<Korisnik>(Id);
        }

        public async Task<IEnumerable<IKorisnikDomainModel>> GetAllAsync()
        {
            try
            {
                return Mapper.Map<IEnumerable<IKorisnikDomainModel>>(await Reporsitory.GetAllAsync<Korisnik>());
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IKorisnikDomainModel> GetAsync(Guid Id)
        {
            try
            {
                return Mapper.Map<IKorisnikDomainModel>(await Reporsitory.GetAsync<Korisnik>(Id));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> UpdateAsync(IKorisnikDomainModel updated)
        {
            try
            {
                return await Reporsitory.UpdateAsync(Mapper.Map<Korisnik>(updated));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IKorisnikDomainModel> GetByUsername(string korisnicko_ime)
        {
            try
            {
                return Mapper.Map<IKorisnikDomainModel>(await Reporsitory.GetQueryable<Korisnik>().Where
                    (i => i.Korisnicko_ime == korisnicko_ime).FirstOrDefaultAsync());//.Where
                //(i => i.Korisnicko_ime == korisnicko_ime).Include(j => j.KorisnikId).FirstOrDefaultAsync());
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
