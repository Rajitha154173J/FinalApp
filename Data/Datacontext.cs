using FinalApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FinalApp.Data
{

    public class Datacontext : DbContext
    {
        public Datacontext(DbContextOptions<Datacontext> options)
        :base (options)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}