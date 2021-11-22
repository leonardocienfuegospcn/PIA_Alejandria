using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dbc.Models
{
  public class clientes
  {
    public int idCliente { get; set; }
    public string nombre { get; set; }
    public string apPaterno { get; set; }
    public string apMaterno { get; set; }
    public string telefono { get; set; }
    public int idEstado { get; set; }
    public int idMunicipio { get; set; }
    public string colonia { get; set; }
    public string calle { get; set; }
    public int numero { get; set; }
  }
}
