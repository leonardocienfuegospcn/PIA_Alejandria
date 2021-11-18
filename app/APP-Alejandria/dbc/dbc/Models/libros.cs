using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dbc.Models
{
  public class libros
  {
    public int isbn { get; set; }
    public string titulo { get; set; }
    public string genero { get; set; }
    public int stock { get; set; }
    public int idAutor { get; set; }
    public int idEditorial { get; set; }
  }
}
