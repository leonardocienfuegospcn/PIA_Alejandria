using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dbc.Models
{
  public class empleados
  {
    public int idEmpleado { get; set; }
    public string nombre { get; set; }
    public string apPaterno { get; set; }
    public string apMaterno { get; set; }
    public string telefono { get; set; }
    public int idEstado { get; set; }
    public int idMunicipio { get; set; }
    public string colonia { get; set; }
    public string calle { get; set; }
    public int numero { get; set; }
    public string puesto { get; set; }
    public int salario { get; set; }
    public int faltas { get; set; }

  }
}
