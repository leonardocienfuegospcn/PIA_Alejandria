using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dbc.Models
{
  public class rentas
  {
    public int idRenta { get; set; }
    public int idCliente { get; set; }
    public int idEmpleado { get; set; }
    public string entrega { get; set; }
    public string devolucion { get; set; }
    public int multa { get; set; }
    public int pagoTotal { get; set; }

  }
}
