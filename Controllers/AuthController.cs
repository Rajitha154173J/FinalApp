using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FinalApp.Data;
using FinalApp.Models;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Oauth2.v2;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FinalApp.Controllers
{ 
    [Route("api/[Controller]")]
    public class AuthController : Controller
    {   private readonly Datacontext _context;
        public AuthController (Datacontext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetPermissionAsync(){
            UserCredential  credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
             new ClientSecrets
                {
                    ClientId = "498910310528-lg39tj3k0176usk4plbgp32pn0nr7ko2.apps.googleusercontent.com",
                    ClientSecret = "KXCv3eLDzcvrBKEzBG7TkIzA"
                },
            new [] { Oauth2Service.Scope.UserinfoProfile,Oauth2Service.Scope.UserinfoEmail },"user",
            CancellationToken.None );



            return Ok(
                new {
                    access_token = credential.Token.AccessToken,
                    id_token = credential.Token.IdToken,
                    expire_token = credential.Token.ExpiresInSeconds
                }
            );
        }

        [HttpGet("[action]")]
        // [Authorize]
        public ActionResult<List<User>> UserDetail(){

            return _context.Users.ToList();
        }

        [HttpPost("login")]
        public IActionResult login([FromBody]UserLogin data){
            
            var user = _context.Users.SingleOrDefault(x => x.UserName == data.UserName);

            var logPass = _context.Users.Single(b => b.UserName == data.UserName);
                        
                        
                                    
             if(user==null || logPass.Password != data.Password)
            {
                return Ok(
                    new{ success="false"}
                    );
            }
            return Ok(
                new{ success="true"}
                );

        }

        [HttpPost]
        public IActionResult Create([FromBody]User data){
          var user= _context.Users.SingleOrDefault(x => x.UserName== data.UserName);
          if (user!=null){
            
             return Ok(
             new{ success="This Username Already used"}
                );

          }
            _context.Users.Add(data);
            _context.SaveChanges();

            return Ok(
                new{ success="true"}
                );
        }
    }
}