import React from 'react';
const SidebarSection = ({ title, options, showSeeMore }) => (
  <div className="sidebar-section">
    <h4 className="section-title">{title}</h4>
    <ul className="section-options">
      {options.map((option, idx) => (
        <li key={idx} className="option-item">
          <label>
            <input type="checkbox" className="filter-checkbox" />
            <span className="checkbox-label">{option}</span>
          </label>
        </li>
      ))}
      {showSeeMore && (
        <li className="option-item see-more">
          <label>
            <input type="checkbox" disabled />
            <span className="checkbox-label">See more</span>
          </label>
        </li>
      )}
    </ul>
  </div>
);

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <SidebarSection title="Popular Shopping Ideas" options={['Portable', 'Touchscreen', 'Work', 'Business']} showSeeMore />
      <SidebarSection title="RAM Size" options={['128 GB', '64 GB', '32 GB', '16 GB', '8 GB', '4 GB', '2 GB']} />
      <SidebarSection title="Display Size" options={['17 Inches & Above', '16 to 16.9 Inches', '15 to 15.9 Inches', '14 to 14.9 Inches', '13 to 13.9 Inches', '12 to 12.9 Inches', '11 to 11.9 Inches', '11 Inches & Under']} />
      <SidebarSection title="Brands" options={['HP', 'Lenovo', 'Dell', 'Apple', 'ASUS', 'acer', 'Microsoft']} showSeeMore />
      <SidebarSection title="Top Brands" options={['Top Brands']} />
      <SidebarSection title="Processor Type" options={['Intel Core i7', 'Intel Core i5', 'Intel Celeron', 'AMD A-Series', 'AMD A4']} showSeeMore />
      <SidebarSection title="Customer Reviews" options={['4 Stars & Up']} />
      <SidebarSection title="Hard Drive Size" options={['4 TB & Above', '2 TB', '1.5 TB', '1 TB', '501 to 999 GB', '321 to 500 GB', '121 to 320 GB', 'Up to 80 GB']} />
      <SidebarSection title="Operating System" options={['Windows 11 Pro', 'Windows 11 Home', 'Windows 10 Pro', 'Windows 11 in S mode', 'Windows 10 Home', 'Windows 10 in S mode', 'Windows Legacy System', 'Mac OS', 'Chrome OS', 'DOS']} />
      <SidebarSection title="Condition" options={['New', 'Renewed', 'Used']} />
      <SidebarSection title="CPU Manufacturer" options={['AMD', 'Apple', 'Intel', 'MediaTek', 'NVIDIA', 'Qualcomm', 'VIA']} />
      <SidebarSection title="Deals & Discounts" options={['All Discounts', "Today's Deals"]} />
      <SidebarSection title="Processor Speed" options={['1 to 1.59 GHz', '1.60 to 1.79 GHz', '1.80 to 1.99 GHz', '2.00 to 2.49 GHz', '2.50 to 2.99 GHz', '3.00 to 3.49 GHz', '3.50 to 3.99 GHz', '4.0 GHz & Above']} />
      <SidebarSection title="Processor Count" options={['24', '20', '16', '14', '12', '10', '8']} showSeeMore />
      <SidebarSection title="Hard Drive Type" options={['Emmc', 'HDD', 'SSD']} />
      <SidebarSection title="Graphics Coprocessor" options={['Intel UHD Graphics', 'Intel Iris Xe Graphics', 'Intel UHD Graphics 600', 'NVIDIA GeForce GTX 1650', 'NVIDIA GeForce GTX 1660Ti', 'NVIDIA GeForce RTX 2060', 'NVIDIA GeForce RTX 2070']} showSeeMore />
      <SidebarSection title="Input" options={['Touch Bar', 'Touch Pad', 'Touchscreen', 'Touchscreen with Stylus Support']} />
      <SidebarSection title="Connectivity" options={['Wi-Fi', 'USB', 'Bluetooth', 'Ethernet', 'HDMI']} />
      <SidebarSection title="Specific Uses" options={['Business', 'Student', 'Gaming', 'Developer', 'Entertainment']} />
      <SidebarSection title="Graphics Card Type" options={['Dedicated', 'Integrated']} />
      <SidebarSection title="Display Resolution" options={['1080p', '4K', '720p']} />
      <SidebarSection title="Features" options={['Backlit Keyboard', 'Anti Glare Coating', 'HD Audio', 'Fingerprint Reader', 'Memory Card Slot', 'Numeric Keypad', 'Spill Resistant']} showSeeMore />
      <SidebarSection title="Graphics Memory" options={['8 GB & Above', '6 to 7 GB', '4 to 5 GB', '2 to 3 GB', 'Up to 1 GB']} />
      <SidebarSection title="Weight" options={['Up to 3 Pounds', '3 to 3.9 Pounds', '4 to 4.9 Pounds', '5 to 5.9 Pounds', '6 to 6.9 Pounds', '7 to 7.9 Pounds', '8 Pounds & Above']} />
      <SidebarSection title="Battery Life" options={['11 Hours & Up', '8 to 10 Hours', '5 to 7 Hours', 'Up to 4 Hours']} />
      <SidebarSection title="USB 3.0 Ports" options={['5 or More', '4', '3', '2', '1', 'None']} />
      <SidebarSection title="Display Type" options={['Amoled', 'LCD', 'LED', 'OLED']} />
      <SidebarSection title="Hardware Interface" options={['USB', 'HDMI', 'Bluetooth', '3.5mm Audio', '802.11 ac/b/g/n', 'ATA', 'Bluetooth 5']} showSeeMore />
      <SidebarSection title="Display Refresh Rate" options={['121 Hz & above', '90 to 120.9 Hz', '59 to 89.9 Hz']} />
      <SidebarSection title="Flash Size" options={['500 GB & Above', '250 to 499 GB', '120 to 249 GB', '64 to 119 GB', '32 to 63 GB', '17 to 31 GB', '8 to 16 GB', '7 GB & Under']} />
      <SidebarSection title="Video Output" options={['HDMI', 'DisplayPort', 'VGA']} />
      <SidebarSection title="Seller" options={['TinVIA Technology', 'Tech Dita']} showSeeMore />
      <SidebarSection title="Premium Brands" options={['Premium Brands']} />
      <SidebarSection title="Cell Composition" options={['Lithium Ion', 'Lithium Polymer']} />
      <SidebarSection title="Number of Cells" options={['1', '2', '3', '4 & above']} />
      <SidebarSection title="Sustainability Features" options={['Any Feature', 'Carbon Impact']} showSeeMore />
      <SidebarSection title="Audio Output" options={['Headphones', 'Speakers']} />
      <SidebarSection title="Model Year" options={['Up to 2020', '2021', '2022', '2023', '2024']} />
      <SidebarSection title="Wi-Fi Generation" options={['Wi-Fi 6', 'Wi-Fi 5', 'Wi-Fi 6E', 'Wi-Fi 4', 'Wi-Fi 7']} />
      <SidebarSection title="Voltage" options={['Up to 4 V', '5 to 14 V', '15 to 19 V', '20 V & above']} />
      <SidebarSection title="Front Photo Sensor Resolution" options={['3 MP & above', '2 to 2.9 MP', '1 to 1.9 MP', 'Up to 1 MP']} />
      <SidebarSection title="Average Standby Battery Life" options={['11 h & above', '9 to 10.9 h', '7 to 8.9 h', 'Up to 6.9 h']} />
      <SidebarSection title="Keyboard Type" options={['Backlit', 'Chiclet', 'Ergonomic', 'Gaming', 'Mechanical']} />
      <SidebarSection title="GPU Manufacturer" options={['AMD', 'Apple', 'ARM', 'Intel', 'MediaTek', 'NVIDIA', 'Qualcomm']} showSeeMore />
      <SidebarSection title="Memory Clock Speed" options={['Up to 2.9 GHz', '3 to 3.9 GHz', '4 to 4.9 GHz', '5 GHz & above']} />
      <SidebarSection title="RAM Type" options={['DDR DRAM', 'DDR SDRAM', 'DDR2 SDRAM', 'DDR3 SDRAM', 'DDR4 SDRAM', 'DDR5 RAM', 'DIMM']} showSeeMore />
      <SidebarSection title="Hard Disk Interface" options={['Solid State', 'PCIE x 4', 'Serial ATA', 'ATA-4', 'eSATA', 'Ethernet', 'Gigabit Ethernet']} showSeeMore />
      <SidebarSection title="Memory Slots" options={['1', '2', '3', '4']} />
    </div>
  );
};

export default Sidebar;
