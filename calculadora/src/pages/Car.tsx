import { FunctionComponent, useState } from "react";
import { Button } from "react-bootstrap";

interface CarProps {
  name: string;
  cities: string[];
}

const Car: FunctionComponent<CarProps> = ({ name, cities }) => {
  const [amounts, setAmounts] = useState<number[]>(Array(10).fill(0));
  const [spezzaturas, setSpezzaturas] = useState<number[]>(Array(10).fill(0));
  const [selectedValue, setSelectedValue] = useState(5);
  const [total, setTotal] = useState<any>({});

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const handleAmountChange = (index: number, value: any) => {
    console.log("here", value);
    const newAmounts = [...amounts];
    newAmounts[index] = value;
    setAmounts(newAmounts);
  };

  const handleSpezzaturaChange = (index: number, value: any) => {
    const newSpezzaturas = [...spezzaturas];
    newSpezzaturas[index] = value;
    setSpezzaturas(newSpezzaturas);
  };

  const handleCalcolate = () => {
    console.log("total");
    var total_amount = 0;
    var total_spezzatura = 0;
    amounts.forEach((input) => {
      console.log(input);
      total_amount += parseFloat(input) || 0;
    });
    spezzaturas.forEach((input) => {
      total_spezzatura += parseFloat(input) || 0;
    });

    var pacchi = total_amount;
    var select = selectedValue;
    var fija = 1;

    var pacchiX = pacchi / select;
    var numeroEntero = Math.floor(pacchiX);
    var decimales = pacchiX - numeroEntero;
    var pacoRestante = fija / select;
    var pacchiDaAdd = decimales / pacoRestante;
    var result = numeroEntero + " Mani da " + select + " pacchi ";
    if (numeroEntero < 1) {
      result = "";
    }

    if (pacchiDaAdd > 0 && numeroEntero > 0) {
      result += " + " + pacchiDaAdd.toFixed(0) + " pachi ";
    }

    if (pacchiDaAdd > 0 && numeroEntero < 1) {
      result += pacchiDaAdd.toFixed(0) + " pachi ";
    }

    if (total_spezzatura > 0) {
      result += " e " + total_spezzatura + " spezzature";
    }

    setTotal({ total_amount, total_spezzatura, result });
  };
  return (
    <div className="mb-5">
      <table>
        <tr>
          <th>{name}</th>
          <th>pacchi</th>
          <th>spezzatura</th>
        </tr>
        {cities.map((value, index) => (
          <RowLabel
            name={value}
            key={index}
            index={index}
            onAmountChange={handleAmountChange}
            onSpezzaturaChange={handleSpezzaturaChange}
          />
        ))}

        <tr>
          <td> Total: </td>
          <td className="total">
            <div className="tot">{total.total_amount}</div>
          </td>
          <td className="spezzTotal">{total.total_spezzatura}</td>
        </tr>
        <tr>
          <th>Bancale da:</th>
          <th>
            {" "}
            <select
              className="pacchi miSelect"
              value={selectedValue}
              onChange={handleChange}
            >
              <option value="5">5 mani</option>
              <option value="6">6 mani</option>
              <option value="7">7 mani </option>
              <option value="8">8 mani</option>
            </select>
          </th>
          <th>""</th>
        </tr>
      </table>
      <div className="mt-3 me-5">
        {" "}
        <Button className="me-3" onClick={handleCalcolate}>
          Calcolo Bancale
        </Button>
        <span className="bancale" id="total">
          {total.result}
        </span>
      </div>
    </div>
  );
};

interface RowLabelProps {
  name: string;
  index: number;
  onAmountChange: any;
  onSpezzaturaChange: any;
}

const RowLabel: FunctionComponent<RowLabelProps> = ({
  name,
  index,
  onAmountChange,
  onSpezzaturaChange,
}) => {
  const [amount, setAmount] = useState("");
  const [spezzatura, setSpezzatura] = useState("");

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
    onAmountChange(index, e.target.value); // Pass the value back to the parent
  };

  const handleSpezzaturaChange = (e: any) => {
    setSpezzatura(e.target.value);
    onSpezzaturaChange(index, e.target.value); // Pass the value back to the parent
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <input
          type="number"
          className="amount"
          width={20}
          placeholder="0"
          value={amount}
          onChange={handleAmountChange}
        />
      </td>
      <td>
        <input
          type="number"
          className="spezzatura"
          placeholder="0"
          value={spezzatura}
          onChange={handleSpezzaturaChange}
        />
      </td>
    </tr>
  );
};

export default Car;
