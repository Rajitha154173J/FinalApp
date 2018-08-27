using Microsoft.AspNetCore.Mvc;

namespace FinalApp.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        
    public UserController()
        {
            
        }
    [HttpGet]
    public IActionResult Get(){
          return Ok ("user get detail");
    }
    }
}